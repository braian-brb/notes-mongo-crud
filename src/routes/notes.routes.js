import { Router } from 'express';
import { notesCtrl } from '../controllers/notes.controllers.js';
import { helpers } from '../middlewares/isAuth.js';
const { isAuth } = helpers

export const router = Router();
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = notesCtrl;

router.get('/notes/add', isAuth, renderNoteForm);
router.post('/notes/new-note', isAuth, createNewNote);

router.get('/notes', isAuth, renderNotes);

router.get('/notes/edit/:id', isAuth, renderEditForm);
router.put('/notes/edit/:id', isAuth, updateNote);

router.delete('/notes/delete/:id', isAuth, deleteNote);
