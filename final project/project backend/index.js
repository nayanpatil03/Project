// Import required modules
import express, { request, response } from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import { compareSync, hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests(cross platform request solutijo)
app.use(express.json()); // Parse incoming JSON data

// MySQL database connection
const conn = mysql2.createConnection({
  host: 'localhost',
  user: 'root',        //  MySQL username
  password: 'cdac',        //  MySQL password
  database: 'resorts_booking_db'  //   database name in which we store the data
});

// Check if the connection to the database is successful?
conn.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
    return;
  }
  console.log('Connected to the database!');
});

// middleware for authentication
function verifyToken(request, response, next) {

  const authheader = request.get('Authorization');
  if (authheader) {
    const token = authheader.split(" ")[1];
    jwt.verify(token, "user1", (error, payload) => {
      if (error) {
        console.log(error);
        response.status(StatusCodes.UNAUTHORIZED).send("invalid token");
      } else {
        request.customerId = payload.customerId // assign payload to custermid to identify token generate for which user
        // console.log(request.customerId);
        next();
      }
    });

  } else {
    response.status(StatusCodes.UNAUTHORIZED).send({ message: "token missing" });
  }
}

//signup request(POST ) -> data will comes from the sign up form
app.post("/signup", (request, response) => {
  try {
    const data = request.body;
    const { name, email, password } = data;
    const encryptpassword = hashSync(data.password, 10);
    const qry = 'INSERT INTO customers (name, email, password) VALUES (?, ?, ?)';
    conn.query(qry, [name, email, encryptpassword], (error, result) => {
      if (error) {
        console.log(error);
        response.status(StatusCodes.CONFLICT).send({ message: "Problem in inserting data into DB" });
      } else {
        response.status(StatusCodes.OK).send({ message: "Successfully Register" });
      }
    })
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "problem in connecting database" });
  }
})

//login request (data will comes from the login form)
app.post("/login", (request, response) => {
  try {
    const data = request.body;
    const { email, password } = data;
    const qry = `SELECT * FROM customers where email='${email}'`;
    conn.query(qry, [email, password], (error, result) => {
      if (error) {
        console.log(error);
        response.status(StatusCodes.CONFLICT).send({ message: "Problem in fetching data into DB" });
      } else {
        if (result.length === 0) {
          response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid Username" });
        } else {
          if (compareSync(password, result[0].password)) {
            const token = jwt.sign({ customerId: result[0].id }, `user1`);
            response.status(StatusCodes.OK).send({ message: "Login Successfully", token: token });
          } else {
            response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid Password" });
          }
        }
      }
    })
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "problem in connecting database" });
  }
})

// //book resort request(book the resort only after the login done)
app.post("/bookings", verifyToken, (request, response) => {

  const { resort_id, check_in, check_out, number_of_persons } = request.body;

  const customer_id = request.customerId;
  const qry = `
     INSERT INTO bookings (customer_id, resort_id, check_in, check_out, number_of_persons)
    VALUES (?, ?, ?, ?, ?)`;

  conn.query(
    qry,
    [customer_id, resort_id, check_in, check_out, number_of_persons],
    (error, result) => {
      if (error) {
        console.log(error);
        return response.status(500).send({ message: "Booking failed" });
      } else {
        response.status(201).send({ message: "Booking successful", bookingId: result.insertId });

      }
    }
  );
});

// // booking new request
// app.post("/bookings", verifyToken, (request, response) => {
//   const { resort_id, check_in, check_out, number_of_persons } = request.body;
//   const customer_id = request.customerId;

//   const getCustomerQry = `SELECT name FROM customers WHERE customer_id = ?`;

//   conn.query(getCustomerQry, [customer_id], (err, result) => {
//     if (err || result.length === 0) {
//       return response.status(500).send({ message: "Customer not found" });
//     }

//     const { name } = result[0];

//     const insertBookingQry = `
//       INSERT INTO bookings (customer_id, resort_id, check_in, check_out, number_of_persons, name, phone)
//       VALUES (?, ?, ?, ?, ?, ?, ?)`;

//     conn.query(
//       insertBookingQry,
//       [customer_id, resort_id, check_in, check_out, number_of_persons, name, phone],
//       (error, result) => {
//         if (error) {
//           console.log(error);
//           return response.status(500).send({ message: "Booking failed" });
//         }
//         response.status(201).send({ message: "Booking successful", bookingId: result.insertId });
//       }
//     );
//   });
// });













//mybooking get request (display all the resort list which is book by the perticular user)


app.get("/mybookings", verifyToken, (request, response) => {
  const customer_id = request.customerId; //customer_id is current logged in customer id
  const qry = `
    SELECT 
    b.id AS booking_id,
    r.name AS resort_name,
    r.location,
    r.image,
    r.price_per_day,
    b.check_in,
    b.check_out,
    b.number_of_persons
  FROM bookings b
  JOIN resorts r ON b.resort_id = r.id
  WHERE b.customer_id = ?
  ORDER BY b.check_in DESC
`;
  conn.query(qry, [customer_id], (error, results) => {
    if (error) {
      console.log(error);
      return response.status(500).json({ message: "Failed to fetch bookings" });
    }
    response.status(200).json(results);
  });
});

//------------------------------------------------------------
// all resorts
app.get("/resorts", (request, response) => {
  try {
    const qry = `select * from resorts`
    conn.query(qry, (error, result) => {
      if (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "somthing went wrong" });
      } else {
        response.status(StatusCodes.OK).send(result)
      }
    })
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "error" });
  }
})


//--------------------------------------------------------------------
app.delete("/mybookings/:id", verifyToken, (request, response) => {
  try {
    const id = request.params.id;
    const qry = `delete from bookings where id=${id}`;
    conn.query(qry, (error, result) => {
      if (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "problem in cancling. please wait" });
      } else {
        response.status(StatusCodes.OK).send({ message: "Booking cancle Successfully" });
      }
    })
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Problem to fetch data for cancling" });

  }
})



//feedback and contact us post api
app.post("/contact-us", (request, response) => {
  try {
    const data = request.body;
    const qry = `INSERT INTO contact_us (name, email, message)
              VALUES (?, ?, ?)
              `;
    conn.query(qry,  [data.name, data.email, data.message],(error, result) => {
      if (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Try again" });
      } else {
        response.status(StatusCodes.OK).send({ message: "Thanks for Contacting Us" });
      }
    })
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Somthing went wrong" });

  }
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
