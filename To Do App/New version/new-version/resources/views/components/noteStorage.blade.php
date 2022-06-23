 @props(['notes'])
 <div class='NotesStorage' style=" padding: 0 50px;font-size: 18px;font-weight: 500;color: black;">
     @if($notes->count()=== 0)
     <p> There is no notes yet</p>
     @else
     @foreach($notes as $note)
     <div class='Note  flex justify-between items-center mb-2' style="padding: 5px 10px;">
         <x-note :note="$note" />
     </div>
     @endforeach
     @endif
 </div>