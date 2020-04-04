(function () {
    const sels = document.querySelectorAll('select[beauty]');
    for (let i = 0; i < sels.length; i++) {
        // sels[i].style.display = 'none';
        renderSelect(sels[i]);
    }

    function renderSelect(sel) {
        const selectDiv = document.createElement('div');
        selectDiv.className = 'select';
        sel.parentNode.insertBefore(selectDiv, sel);
        const selectedDiv = document.createElement('div');
        selectedDiv.className = 'selected';
        selectedRender(selectedDiv, sel);
        selectDiv.appendChild(selectedDiv);
    }

    function selectedRender(selectedDiv, sel) {
        selectedDiv.appendChild(`<div class="content">${'aaaa'}</div>
                               <i class="iconfont icon-xiajiantou"></i>`);
    }
}())