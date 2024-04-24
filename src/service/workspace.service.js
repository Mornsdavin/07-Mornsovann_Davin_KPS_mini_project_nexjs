export async function getAllWorkspace (){
    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces');
    const data = await res.json();
    return data;
}



// export async function getWorkspaceByIdService(id){
//     const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspace/${workSpaceId}`);
//     const data = await res.json();
//     return data;
// }