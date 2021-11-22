// Actions Methods
// "/projects" "/projects/index"
const index =(req, res) =>{
    res.send('REspondiendo a "/projects/index"')
};

//"/projects/add" 
const add = (req, res) => {
    res.render('project/addView')
};

const addPost =(req, res) =>{
    // Rescatando la información del formulario
    const { validData: project} = req;
    res.status(200).json(project);
};

// Pendiente por programar
export default{
    add,
    addPost,
    index,
};
