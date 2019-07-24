$(document).ready(function(){
	//add task
	$('.addBtn').on('click', function(){
		let elem = `<li class="task">
					<!-- each task has checkbox, content, remove button -->
					<div class="check col-1">
						<input type="checkbox">
					</div>
					<div class="text col-2">${$('.addField').val()}</div>
					<div class="remove col-3"></div>
				</li>`;
		$('.tasks').append(elem);
	});

	//remove task
	$('.tasks').on('click', '.remove', function(){		
		//add eventHandler to .remove whenever clicked
		//allows newly added task to be deleted
		$(this).parent().fadeOut();
	})

	//checkbox
	$('.tasks').on('change', '.check input', function(){
		$(this).parent().next().toggleClass('checked');
		//look for next class within the parent group
	})

	//sortable (jQuery UI)
	$('#tasks-list').sortable();
});