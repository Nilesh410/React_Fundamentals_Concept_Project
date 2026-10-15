import React from 'react'
import { useForm} from "react-hook-form"

const App = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function onsubmit(data)
  {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
            <div>
                <label>First_Name</label>
                <input type="text" 
                    {...register('firstname', 
                       { required: {value:true, message:'First Name is required'},
                         minLength:{value:3,message:'At least 3 char required'},
                         maxLength:{value:8,message:'It should not more than 8 char'},
                         pattern: {value:/^[A-Za-z]+$/i,message:'Value should be as per the pattern'}
                        }
                      )
                    }
                />
                {errors.firstname && <h6 style={{color:"red"}}>{errors.firstname.message}</h6>}
            </div>
            <br />
            <div>
                <label>Middle_Name</label>
                <input type="text" {...register('middlename', 
                { required: {value:true, message:'Middle Name is required'},
                         minLength:{value:3,message:'At least 3 char required'},
                         maxLength:{value:8,message:'It should not more than 8 char'}
                        })} />
                {errors.middlename && <h6 style={{color:"red"}}>{errors.middlename.message}</h6>}
            </div>
            <br />
            <div>
                <label>Last_Name</label>
                <input type="text" {...register('lastname', 
                    { required: {value:true, message:'Last Name is required'},
                         minLength:{value:3,message:'At least 3 char required'},
                         maxLength:{value:8,message:'It should not more than 8 char'}
                        }
                )} />
                {errors.lastname && <h6 style={{color:"red"}}>{errors.lastname.message}</h6>}
            </div>
            <br />
            <input type="submit" />
        </form>
  )
}

export default App