const index = (req, res) => {
    res.render('home/index', {
        title: 'ProjNotes', 
    });
};

const greeting = (req,res) => {
    res.status(200).json({
        message: 'Hola Campeon'
    });
};

const about = (req,res) => {
    res.render('home/about',{title: 'ProjNotes  ****',});
};

export default {
    index,
    greeting,
    about,
};