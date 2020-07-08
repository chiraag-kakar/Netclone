var tabs = $('#features > nav a')
var tabsContent = $('#features > article > section')
tabs.click(function (e) {
  e.preventDefault()
  var me = $(this)
  tabs.removeClass('is-selected')
  me.addClass('is-selected')
  tabsContent.removeClass('is-selected')
  tabsContent
    .filter((i, tab) => $(tab).data('id') === me.data('id'))
    .addClass('is-selected')
})
