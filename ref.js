// //post Reqest
// export const getServerSideProps = async ({ params }) => {
//     const res = await axios.post(
//       `https://tesla-lightning.herokuapp.com/product/search`, 
//       {
        
//           text: "new chandeller",
        
//         headers: {
//           Authorization:
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
//         },
//       }
//     );
//     return {
//       props: {
//         products: res.data.data,
//       },
//     };
// };
  
// // ////////////////////////////////////
// //get Reqest
// export const getServerSideProps = async ({ params }) => {
//     const res = await axios.get(
//       `https://tesla-lightning.herokuapp.com/dashboard/product`, 
//       {
        
       
        
//         headers: {
//           Authorization:
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
//         },
//       }
//     );
//     return {
//       props: {
//         products: res.data.data,
//       },
//     };
//   };
  