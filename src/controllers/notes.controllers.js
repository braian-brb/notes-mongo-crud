export const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/new-note');
}

notesCtrl.createNewNote = (req, res) =>{
    console.log(req.body)
    res.send('new-note')
}

notesCtrl.renderNotes = (req, res) =>{
    res.render('render notes')
}

notesCtrl.renderEditForm = (req, res) =>{
    res.send('edit form')
}

notesCtrl.updateNote = (req, res) =>{
    res.send('update note')
}

notesCtrl.deleteNote = (req, res) =>{
    res.send('deleting note')
}