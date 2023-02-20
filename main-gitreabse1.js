/*
 * @Author: weishunjie-github 157680333@qq.com
 * @Date: 2023-02-20 15:02:36
 * @LastEditors: wsj-outlook weishunjie@outlook.com
 * @LastEditTime: 2023-02-20 16:18:37
 * @FilePath: \git-flow-test\main-gitreabse.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//新建两个账号的分支后，并且提交三个commit 并且提交推送各自的分支。

//此处为了main 提交三个文件。并且push 种类文件命名都是随意的。

//以上步骤完成后，  我们切换的branch2   然后输入指令  git rebase main   然后我们切换分支到main   然后git merge branch2  然后push就可以了
//在vscode中的操作是   我们点击左下角main，切换到分支branch2  然后选择git工具中分支 -  変基分支 - 変基到main- 然后切换到main -合并分支-选择branch2分支合并-然后push  这时候我们的graph就是一条直线了。


let obj = {
    name:'main-gitreabse1',
    fli:['main.js','main.css','main.html']

}

