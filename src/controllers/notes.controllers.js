export const notesCtrl = {};
import Note from '../models/Note.js'

notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req, res) =>{
    const {title, description} = req.body;

    const newNote = new Note({title, description})
    await newNote.save()
    res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) =>{
    const notes = await Note.find().lean();
    res.render('notes/all-notes', {notes})
}

notesCtrl.renderEditForm = (req, res) =>{
    res.send('edit form')
}

notesCtrl.updateNote = (req, res) =>{
    res.send('update note')
}

notesCtrl.deleteNote = async (req, res) =>{
    const {id} = req.params
    await Note.findByIdAndDelete(id)
    res.redirect('/notes')
}