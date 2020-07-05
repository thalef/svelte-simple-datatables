export default class Thead{
    constructor(thead, header) {
        this.thead = thead
        this.header = header
    }

    createStickyHeader() {
       Array.from(this.thead.children).forEach(th => {
           th.style.width = th.getBoundingClientRect().width + 'px'
       })
       this.header.style.height = this.thead.getBoundingClientRect().height + 'px'
       this.header.style.width = this.thead.getBoundingClientRect().width + 'px'
       const thead = this.thead.cloneNode(true)
       this.header.append(thead)
       this.removeOriginalThead()
       return this.header
    }

    removeOriginalThead() {
        this.thead.parentNode.style.marginTop = '-' + this.header.style.height
        this.thead.style.maxHeight = '1px'
        this.thead.style.visibility = 'hidden'
    }

    redraw(tr) {
        let i = 0
        tr.forEach(td => {
            this.header.children[0].children[i].width = column.getBoundingClientRect().width + 'px'
            i++
        })
    }

}