const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    removeThoughtReaction,
  } = require('../../controllers/userController');
  
 
  router.route('/')
  .get(getThoughts)
  .post(createThought);
  

  router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
  
 
  router.route('/:thoughtId/friends')
  .post(addThoughtReaction)
  .delete(removeThoughtReaction)

  
  module.exports = router;
