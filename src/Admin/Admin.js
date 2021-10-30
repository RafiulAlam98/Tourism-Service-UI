import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Admin.css'

const Admin = () => {

     const { register, handleSubmit, formState: { errors } } = useForm();
     
    

     
     const onSubmit = data => {
          fetch('http://localhost:5000/admin',{
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
          <Container className="admin-container">
                  
          <form className="d-flex flex-column w-25 justify-content-center mx-auto p-2" onSubmit={handleSubmit(onSubmit)}>
              
             <div className="d-flex">
                  <div className="me-2">
                         <input className="mb-3"  {...register("place",{ required: true }) } />

                         {errors.place && <span>This field is required</span>}

                         <input className="mb-3" {...register("title", { required: true })} />

                         {errors.title && <span>This field is required</span>}

                         <input className="mb-3" placeholder="" {...register("img", { required: true })} />

                         {errors.img && <span>This field is required</span>}

                         <input className="mb-3"  placeholder="" {...register("description", { required: true })} />

                         {errors.description && <span>This field is required</span>}

                         <input className="mb-3"  {...register("location", { required: true })} />

                         {errors.location && <span>This field is required</span>}
                  </div>

                  <div>
                  <input className="mb-3"  {...register("date",{ required: true }) } />

                         {errors.date && <span>This field is required</span>}

                         <input className="mb-3" {...register("deparature", { required: true })} />

                         {errors.deparature && <span>This field is required</span>}

                         <input className="mb-3" placeholder="" {...register("community", { required: true })} />

                         {errors.community && <span>This field is required</span>}

                         <input className="mb-3"  placeholder="" {...register("cost", { required: true })} />

                         {errors.cost && <span>This field is required</span>}

                         <input className="mb-3"  {...register("rating", { required: true })} />

                         {errors.rating && <span>This field is required</span>}
                  </div>
             </div>
               
               <input type="submit" />
          </form>
     </Container>
     );
};

export default Admin;