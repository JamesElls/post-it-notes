class NotesController < ApplicationController
  def index
    @notes = Note.all

    render component: "Notes", props: {notes: @notes}
  end

  def show
        # params in our controller
        @note = Note.find(params[:id])
        # note = Note.first
        render component: "Note", props: {note: @note}
  end

  def new
    render component: "NoteNew"
  end

  def create
    puts "HERE!!!!!"
    puts params #{"page"=>{"title"=>"MY TITLE HERE"}
    title = params[:note][:title] 
    description = params[:note][:description] 
 
    Note.create(title: title, description: description)
    redirect_to notes_path
  end
end
