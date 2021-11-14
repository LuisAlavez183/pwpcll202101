// Actions Methods
// "/projects" "/projects/index"
const index =(req, res) =>{
    res.send('REspondiendo a "/projects/index"')
};

//"/projects/add" 
const add = (req, res) => {
    res.send('REspondiendo a "/projects/add"')
};


// TODO: Pendiente por programar
export default{
    add,
    index,
};
