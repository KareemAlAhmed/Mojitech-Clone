<div class='AddingNote w-full h-32 mt-12 flex flex-col items-center' style="gap: 10px;">
    <form method="POST" action='./add' style="display: flex;flex-direction: column;align-items: center;gap: 10px;">
        @csrf
        <div class='noteWritting flex flex-col items-center font-normal' style="gap: 2px;">
            <label>Note :</label>
            <input class='inp' type='text' name='text' id='text' placeholder="Enter Your Note" class="h-6 text-center p-3 text-base" style="min-width: 200px;border-radius: 100px;outline: none;border: 2px solid #a7aaad;caret-color: #a7aaad;"></input>
        </div>
        <div class='noteSaving'>
            <button class='btn bg-green-700 text-white text-sm font-medium cursor-pointer' style="border: none;padding: 6px 15px;border-radius: 100px;">Save Task</button>
        </div>
    </form>
</div>