const express  = require('express');
const app = express();

/* ROUTE HANDLERS */

/* WORD ROUTES */

/**
 * GET /words
 * Purpose: Get all words in dictionary
 */
app.get('/words', (req,res) => {
    
})

/* HISTORY ROUTES */

/**
 * GET /history
 * Purpose: Get all sentences in history
 */
app.get('/history', (req,res) => {
    
})

/**
 * POST /history
 * Purpose: Save sentence to history
 */
app.post('/history', (req,res) => {
    
})

/**
 * DELETE /history/:id
 * Purpose: Delete sentence from history
 */
app.delete('/history/:id', (req, res) => {

})



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})