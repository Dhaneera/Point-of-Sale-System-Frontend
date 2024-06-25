#Point-of-Sale-System(Frontend)
# POS System

## Introduction
This project is a Point of Sale (POS) system built with React and Next.js. It aims to provide an efficient and user-friendly interface for managing sales, inventory, and customer data.

## Features
- **User Authentication**: Secure login and registration for staff.
- **Product Management**: Add, edit, and delete products.
- **Sales Processing**: Process sales.
- **Customer Management**: Maintain customer information.


## Technologies Used
- **Frontend**: React, Next.js, Tailwind CSS
- **State Management**: Redux Toolkit
- **API Calls**: React Query, Axios
- **Icons**: Headless UI Icons
- **Authentication**: NextAuth.js
- **Database**: MongoDB (via MYSQL)

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pos-system.git
   cd pos-system
2. Install Dependencies by using
    npm install
    # or
    yarn install

3. Configure  create.env.development file in the root directory and add below environment variables

   NEXT_PUBLIC_SAMPLE="http://localhost:8080/sample"
   NEXT_PUBLIC_BASE_URL='http://localhost:8080/'
   NEXT_PUBLIC_LOGIN=http://localhost:8080/api/auth/login
   NEXT_PUBLIC_REGISTER=api/auth/register
   NEXT_PUBLIC_GET_ALL_PRODUCTS=http://localhost:8080/product/api/getAll
   NEXT_PUBLIC_GET_ALL_CATEGORIES=http://localhost:8080/category/api/getAll
   NEXT_PUBLIC_DELETE_CATEGORIES=http://localhost:8080/category/api/delete/
   NEXT_PUBLIC_ADD_CATEGORIES=http://localhost:8080/category/api/add
   NEXT_PUBLIC_GET_ALL_CUSTOMERS=http://localhost:8080/customer/api/getAll
   NEXT_PUBLIC_REMOVE_CUSTOMER=http://localhost:8080/customer/api/remove/
   NEXT_PUBLIC_GETBYID_CUSTOMER=http://localhost:8080/customer/api/getById/
   NEXT_PUBLIC_UPDATE_CUSTOMER=http://localhost:8080/customer/api/update/
   NEXT_PUBLIC_ADD_CUSTOMER=http://localhost:8080/customer/api/add
   NEXT_PUBLIC_GET_ALL_ORDERS=http://localhost:8080/orders/api/getAll
   NEXT_PUBLIC_ADD_ORDER=http://localhost:8080/orders/api/add
   NEXT_PUBLIC_ADD_PRODUCT=http://localhost:8080/product/api/add
   NEXT_PUBLIC_UPDATE_PRODUCT=http://localhost:8080/product/api/update/
   NEXT_PUBLIC_REMOVE_PRODUCT=http://localhost:8080/product/api/remove/
   NEXT_PUBLIC_GET_ALL_USERS="http://localhost:8080/user/api/getAll"
   NEXT_PUBLIC_DELETE_ALL_USERS=http://localhost:8080/user/api/delete/
   NEXT_PUBLIC_UPDATE_USER=http://localhost:8080/user/api/update/
   NEXT_PUBLIC_ADD_USER=http://localhost:8080/user/api/add
   
5. run the application using
     make sure to run spring-boot project before running the front-end application use this link (https://github.com/SDW-SWD/Point-of-Sale-System-Backend) to run the backend and database 


 5 .npm run dev
    # or
    yarn dev

