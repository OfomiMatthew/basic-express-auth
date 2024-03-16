const express = require("express");
const route = require('./routes/authRoutes')

const app = express();

// accept json
app.use(express.json())
// accept body
app.use(express.urlencoded({extended:true}))

// use static template 
app.use(express.static('public'))
const PORT = 1000;

app.use('/api/v1',route)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
