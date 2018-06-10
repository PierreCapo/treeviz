export default function templateSystem(data, tpl) {
    var re = /{{([^}}]+)?}}/g, match;
    var tpl_copy = tpl;
    while (match = re.exec(tpl_copy)) {
        if (data[match[1]]) {
            tpl = tpl.replace(match[0], data[match[1]]);
        }
        else {
            tpl = tpl.replace(match[0], "");
        }
    }
    return tpl;
}