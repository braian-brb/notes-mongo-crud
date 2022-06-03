import { Router } from 'express';
import { notesCtrl } from '../controllers/notes.controllers.js';

export const router = Router();
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = notesCtrl;

router.get('/notes/add', renderNoteForm);
router.post('/notes/new-note', createNewNote);

router.get('/notes', renderNotes);

router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote);

router.delete('/notes/delete/:id', deleteNote);
