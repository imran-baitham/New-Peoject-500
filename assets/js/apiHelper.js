export class ApiHelper {
     constructor() {
          this.baseUrl = "https://jsonplaceholder.typicode.com";
     }

     async fetchFromPortal(url, method, body) {
          const respose = await fetch(this.baseUrl + url, {
               ...(method && ({ method })),
               ...(body && ({ 'Content-type': 'application/json; charset=UTF-8' })),
               ...(body && ({ body: JSON.stringify(body) }))
          });
          return respose.json();
     }
}

























   //   return `
   //         <div class="post-card">
   //             <div>${post.id}</div>
   //             <h4>${post.title}</h4>
   //             <h4>${post.body}</h4>
   //             ${post.comments ? `<div class="post-comments">
   //               <p>Comments</p>
   //             ${post.comments.map((comment, index) => {
   //     return `<div class="comment-card">${index + 1}: ${comment.name}</div>`
   //   }).join("")
   //       }</div>` : `<div class="link" data-tag-id="${post.id}">View comments</div>`}
   //             <div class="post-buttons">
   //                 <button class="btn" data-tag-id="${post.id}-view">view</button>
   //                 <button class="btn" data-tag-id="${post.id}-update">Update</button>
   //                 <button class="btn" data-tag-id="${post.id}-delete">Delete</button>
   //             </div>
   //         </div>
   //     `;
   // })
   // .join("");

   // console.log(post.user.profile_pic_url)
   // console.log(post.user.profile_pic_url)
   // <i class="fas fa-bars"></i>
   //<i class="fas fa-edit"></i>
   // <i class="fas fa-trash"></i>
   // <i class="fas fa-eye"></i>
   // console.log(post.user.images(candidates.url))
   ////////////////////////////////////////////////////////////
   // render(e) {
   //   // e.stopPropagation();
   //   const { posts, isLoadingPosts } = this.state;
   //   const postsList = document.querySelector("#posts-list");
   //   console.log({ posts })
   //   postsList.innerHTML = isLoadingPosts ? "<div>Loading the MH instagrm ...</div>" : posts
   //     .map((post) => {
   //       return `
   //  <div class="post-card">
   //      <div   class= "instaimage" >
   //        <img src="./images/9a18d83c67150471d24fbc8609e7cb5c.jpg" alt="">
   //          <i   type="button" value="Show DIV" id="bt" onclick="toggle(this)" id="show" class="fas fa-ellipsis-v" ></i>
   //           <h4   class = "imageid"  >${post.user.full_name}</h4>
   //   </div>
   //      <div   class="mainicons">
   //               <i class="far fa-heart"></i>
   //               <i class="far fa-comment"></i>
   //               <i class="fas fa-location-arrow"></i>
   //               <i class="far fa-bookmark"></i>
   //          </div>
   //       <div >${post.id}</div>
   //            <p class = "captions">${post.caption}</p>
   //            ${post.comments ? `<div class="post-comments"><p>Comments</p>
   //     ${post.comments.map((comment, index) => {
   //         return `<div class="comment-card">${index + 1}: ${comment.name}</div>`
   //       }).join("")}</div>
   // `
   //           : `<div class="link" data-tag-id="${post.id}">View comments</div>`}
   //          <div class ="iconshow" style="border:solid 1px #ddd; padding:10px; display:none;" id="cont">
   //                   <span id ="btnsview" class="post-buttons"   >
   //                       <span  style="  margin-right:30px ;"  class="iconbtn"  class="btnlink"   ><i class="fas fa-link"></i>
   //                       </span>
   //                       <span  style="  margin-right:30px ;"  class="iconbtn" class="btnshare" data-tag-id="${post.id}-update"> <i class="fas fa-share-alt"></i>
   //                       </span>
   //                       <span  style="  margin-right:30px ;"   class="iconbtn"   class="btnliner" data-tag-id="${post.id}-delete"> <i class="fas fa-external-link-alt"></i>
   //                       </span>
   //          </div>
   //                   <div class ="commetinput">
   //                   <i class="far fa-user-circle" ></i>
   //                   <input type="text" name="" id=""  placeholder="ADD A COMMENT">
   //                     </div>
   //               </div>
   //               `;
   //     })
   //     .join("");