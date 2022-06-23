 @props(['note'])
 <div class='noteText flex items-baseline justify-around' style="gap: 5px;">
     <input type="checkbox" onclick="console.log*(document.querySelector('#text'))" />
     <p id="text">{{$note->text}}</p>
 </div>
 <div class='noteOptions flex justify-center items-center w-5 h-5 items-start'>
     <form method="POST" action="./note/{{$note->id}}">
         @csrf
         @method('DELETE')
         <button><img id='trush' src="./assets/garbage.png" alt='logo' class="w-5 h-5 cursor-pointer" onclick="" /></button>
     </form>
 </div>