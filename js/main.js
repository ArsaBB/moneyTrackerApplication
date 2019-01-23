$(document).ready( function () {
    $('#myTable').DataTable();
} );

// Add

$(document).ready(function() {
    let table = $('#myTable').DataTable();
 
    $('#addRow').on( 'click', function () {
        table.row.add( [
            $('#date-input').val(),
            $('#category-input option:selected').text(),
            $('#comment').val(),
            $('#number-input').val(),
            $("input[name='currency']:checked").val()
        ] ).draw( false );
    } );
} );

$('#addRow').click();


// Delete

$(document).ready(function() {
  let table = $('#myTable').DataTable();

  $('#myTable tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
  } );

  $('#deleteRow').click( function () {
      table.row('.selected').remove().draw( false );
      $('#editRow').attr('disabled', true);
  } );
} );

// Edit Modal 

$('#myTable tbody').on('click', 'tr', function () {
    $('#editRow').removeAttr('disabled');
  
});
 $('#closeModal').on('click', function(){
     $('#editRow').attr('disabled', true);
 });

