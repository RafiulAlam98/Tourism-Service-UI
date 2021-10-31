import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Admin.css'

const Admin = () => {

     const { register, handleSubmit, formState: { errors } } = useForm();
     
    

     
     const onSubmit = data => {
          fetch('https://boiling-chamber-75432.herokuapp.com/admin',{
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               if(data?.insertedId){
                    console.log(data)
                    alert('Successfully Added the User')     
               }
          })
          console.log(data)

     };
     return (
          <Container fluid className="container-body">
               <Row className="service-container">

                    <div className=" mt-4">
                         <h1 className="text-color">Add A New Service Offer</h1>
                    </div>

                    <Col xs={12} md={12} lg={12} className="mb-5 mt-2">
                         <form className="d-flex flex-column mt-5 justify-content-center mx-auto p-5 px-5  form-container" onSubmit={handleSubmit(onSubmit)}>
                              <input className="mb-3" placeholder="Place"  {...register("place",{ required: true }) } />

                              {errors.place && <span>This field is required</span>}

                              <input className="mb-3" placeholder="Title" {...register("title", { required: true })} />

                              {errors.title && <span>This field is required</span>}

                              <input className="mb-3" placeholder="Image" {...register("img", { required: true })} />

                              {errors.img && <span>This field is required</span>}

                              <input className="mb-3"  placeholder="Description" {...register("description", { required: true })} />

                              {errors.description && <span>This field is required</span>}

                              <input className="mb-3" placeholder="Location"  {...register("location", { required: true })} />

                              {errors.location && <span>This field is required</span>}
                    

                    
                              <input className="mb-3" placeholder="Date"  {...register("date",{ required: true }) } />

                              {errors.date && <span>This field is required</span>}

                              <input className="mb-3" placeholder="Deparature"  {...register("deparature", { required: true })} />

                              {errors.deparature && <span>This field is required</span>}

                              <input className="mb-3" placeholder="Community" {...register("community", { required: true })} />

                              {errors.community && <span>This field is required</span>}

                              <input className="mb-3"  placeholder="Cost" {...register("cost", { required: true })} />

                              {errors.cost && <span>This field is required</span>}

                              <input className="mb-3" placeholder="Rating"  {...register("rating", { required: true })} />

                              {errors.rating && <span>This field is required</span>}
                    
               
                    
                              <input className="fw-bold text-primary" type="submit" />
                         </form>
                    </Col>
               </Row>   
                   
          </Container>
     );
};

export default Admin;