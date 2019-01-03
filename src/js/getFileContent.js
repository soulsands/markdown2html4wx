document.addEventListener("dragleave", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("drop", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("dragenter", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("dragover", function (e) {
    e.preventDefault();
}, false);

let area = document.querySelector('.area');
area.addEventListener('drop', (e) => {
    area.style.border = 'none'
    e.preventDefault()
    let files = e.dataTransfer.files;
    let read = new FileReader();
    let num = 0;

    function readfile(files, callback) {
        let file = files[num];
        if (file == null || file == undefined) return
        read.readAsText(file);
        read.onload = (file) => {
            callback(read.result)
            num++
            readfile(files, callback)
        }
    }
    readfile(files, (content) => {
        transToHtml(content);

    })
    
})
area.addEventListener('dragover', (e) => {
    area.style.border = '5px dashed #d8d8d8'
})
area.addEventListener("dragleave", function (e) {
    area.style.border = 'none'
});
//btnclick
let skinBtn = document.querySelector('.btn-skin');
let uploaBtn = document.querySelector('.upload-btn');
skinBtn.addEventListener("click", function (e) {
    uploaBtn.click()
});
uploaBtn.addEventListener("change", function (e) {
    let files = uploaBtn.files;
    var reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = function () {
        let content = reader.result;
        transToHtml(content);
    }
});