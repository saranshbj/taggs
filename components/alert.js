const Alert = (props) => {

    return ( 
        <>
        <p className="max-w-3xl md:max-w-2xl bg-red-500 text-white  font-poppins px-3 py-2 w-full rounded-lg">
            <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              {props.alert}
            </p>
        </>
     );
}
 
export default Alert;