const useTraversetree=()=>{
function insertNode(tree,folderId,item,isFolder){
if(tree.id===folderId && tree.isFolder){
tree.items.push({
    id:new Date().getTime(),
    name:item,
    isFolder,
    items:[]
});
return tree;
}
let finalnode=[];
finalnode=tree.items.map((ob)=>{
    return insertNode(ob,folderId,item,isFolder);
})
return {...tree,items:finalnode};
}
return {insertNode};
}
export default useTraversetree;