// // import React, {useEffect} from 'react';
// // import React, {useState} from 'react';

// // import {fetchSmurfs} from '../actions/action'
// // import {addSmurfs} from '../actions/action'

// // import Smurf from './Smurf';
// // import {useSelector, useDispatch} from 'react-redux';
// // import { connect } from "react-redux";



// // const Smurflist = props => {
// //     const dispatch = useDispatch()
// //     const smurfs = useSelector(state => state.smurfs)
// //     const isFetching = useSelector(state => state.isFetching)
// //     const error = useSelector(state => state.error)
// //     useEffect(() => {
// // dispatch(fetchSmurfs());
// //     }, [fetchSmurfs, addSmurfs]);
// //     return (
// //     <div>
// //         {isFetching && <p>Getting Smurfs...</p>}
// //         {smurfs && smurfs.map((smurf) => <Smurf smurf={smurf}/>)}
// //         {error && <p>Error Loading ({error})</p> }
// //         </div>
// //     )
// // }

// // export default Smurflist;

// // import React, {useState} from 'react';
// // import {addSmurfs} from '../actions/action'

// // import { connect } from "react-redux";

// // const SmurfList= props => {
// //     const [newSmurf, setNewSmurf] = useState({
// //       name: '',
// //       age: '',
// //       height: '',
// //     });
  
// //     const changeHandler = e => {
// //       setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
// //     };
  
// //     const submitForm = e => {
// //       e.preventDefault();
// //       props.addSmurfs(newSmurf);
// //     setNewSmurf({
// //         name: "",
// //         age: "",
// //         height: "",
// //     })

// //     };
  
// //     return (
// //       <div>
// //         <form onSubmit={submitForm}>
// //           <label>
// //             Name:
// //             <input
// //               name="name"
// //               id=""
// //               type="text"
// //               onChange={changeHandler}
// //               value={newSmurf.name}
// //             />
// //           </label>
          
// //           <button type="submit" >
// //             Add Your Smurf!
// //           </button>
// //         </form>
// //       </div>
// //     );
// //   };
  
// //   const mapStateToProps = state => {
// //     return {
// //       addSmurfs: state.addSmurfs
// //     };
// //   };
  
// //   export default connect(
// //     mapStateToProps,
// //     { addSmurfs }
// //   )(SmurfList);

// // import React, {useEffect} from 'react';
// // import Smurf from './Smurf';
// // import {fetchSmurfs} from '../actions/action';
// // import {connect} from 'react-redux';

// // const Smurfstuff = props => {
// //     useEffect(() => {
// //         props.fetchSmurfs()
// //     }, []);
// //     if (props.umSmurfing){
// //         return (
// //             <div>
// //                 <h2>What is going on...</h2>
// //             </div>
// //         )
// //     }
// //     return (
// //         <div>
// //             {props.err && <p>{props.err}</p>}
// //             {props.smurfInfo.map(smurf => (
// //                 <Smurf key={smurf.id} smurf={smurf} />
// //             ))}
// //         </div>
// //     )
// // }

// // const mapStateToProps = state => {
// //     return {
// //         smurfInfo: state.smurfInfo,
// //         umSmurfing: state.umSmurfing,
// //         err: state.err
// //     }
// // }

// // export default connect(
// //     mapStateToProps,
// //     {fetchSmurfs}
// // )(Smurfstuff)



// // import React, {useEffect} from 'react';
// // import {fetchSmurfs} from '../actions/action'
// // import Smurf from './Smurf';
// // import {useSelector, useDispatch} from 'react-redux';


// // const Smurflist = props => {
// //     const dispatch = useDispatch()
// //     const smurfs = useSelector(state => state.smurfs)
// //     const isFetching = useSelector(state => state.isFetching)
// //     const error = useSelector(state => state.error)
// //     useEffect(() => {
// // dispatch(fetchSmurfs());
// //     }, [fetchSmurfs]);
// //     return (
// //     <div>
// //         {isFetching && <p>Getting Smurfs...</p>}
// //         {smurfs && smurfs.map((smurf) => <Smurf smurf={smurf}/>)}
// //         {error && <p>Error Loading ({error})</p> }
// //         </div>
// //     )
// // }

// // export default Smurflist;

// import React, {useState} from 'react';

// const SmurfList = (props) => {
//     const [newSmurf, setNewSmurf] = useState({
//         name: '',
//         age: '',
//         height: '',
//     });

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addSmurf(newSmurf);
//         setNewSmurf({
//             name: "",
//             age: "",
//             height: "",
//         })
//     } 
// const handleChanges = e => {
//     setNewSmurf({
//         ...newSmurf,
//         [e.target.name]: e.target.value
//     });
// };

// return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input 
//                 type="text"
//                 name="name"
//                 placeHolder="name"
//                 onChange={handleChanges}
//                 value={newSmurf.name}
//                 />
//             </div>
//             <button className ="submitButton" type="submit">Play God</button>
//         </form>
//     </div>
// )


// }

// export default SmurfList;


import React, {useEffect} from 'react';
import {fetchSmurfs} from '../actions/action'
import Smurf from './Smurf';
import {useSelector, useDispatch} from 'react-redux';



const Smurflist = props => {
    const dispatch = useDispatch()
    const smurfs = useSelector(state => state.smurfs)
    const isFetching = useSelector(state => state.isFetching)
    const error = useSelector(state => state.error)
    useEffect(() => {
dispatch(fetchSmurfs());
    }, [fetchSmurfs]);
    return (
    <div>
        {isFetching && <p>Getting Smurfs...</p>}
        {smurfs && smurfs.map((smurf) => <Smurf smurf={smurf}/>)}
        {error && <p>Error Loading ({error})</p> }
        </div>
    )
}

export default Smurflist;



