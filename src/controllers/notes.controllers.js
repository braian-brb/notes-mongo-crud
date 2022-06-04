export const notesCtrl = {};
import Note from '../models/Note.js'

notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/new-note');
}

notesCtrl.createNewNote = async (req, res) =>{
    const {title, description} = req.body;
    const newNote = new Note({title, description})
    await newNote.save()
    req.flash('success_msg', 'Note added successfully')
    res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) =>{
    const notes = await Note.find().lean();
    res.render('notes/all-notes', {notes})
}

notesCtrl.renderEditForm = async (req, res) =>{
    const {id} = req.params
    const note = await Note.findById(id).lean()
    console.log(note._id)
    res.render('notes/edit-note', {note, id})
}

notesCtrl.updateNote = async (req, res) =>{
    const { title, description } = req.body
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Note updated successfully')
    res.redirect('/notes')

}

notesCtrl.deleteNote = async (req, res) =>{
    const {id} = req.params
    await Note.findByIdAndDelete(id)
    req.flash('success_msg', 'Note deleted successfully')
    res.redirect('/notes')
}