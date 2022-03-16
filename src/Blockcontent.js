function Blockcontent({disvalue}) { 
 

    var inf=disvalue.map(items => 
        <div className='equaldiv' key={items.props.id}>
            <div className='aligncenter' style={{ fontSize: '8em' }} >
                {items}
            </div>
        </div>)


   
 
return(
<div> {inf}
</div>
        
               




);}


export default Blockcontent;