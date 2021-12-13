import { ApiHelper } from "./apiHelper.js";

export class Posts {
     constructor() {
          this.state = {
               posts: [],
               isLoadingPosts: false,
          };
          this.apiHepler = new ApiHelper();
     }

     seState(newState) {
          this.state = newState;
     }

     async getPosts() {
          this.seState({ ...this.state, isLoadingPosts: true });
          const posts = await this.apiHepler.fetchFromPortal("/users", 'GET');
          console.log(posts)
          this.seState({ ...this.state, isLoadingPosts: false, posts });
          this.render();
     }

     async getPostComments(id) {
          const { posts } = this.state
          const postComments = await this.apiHepler.fetchFromPortal(`/posts/${id}/comments`, 'GET')
          const index = posts.findIndex(x => x.id === Number(id))
          if (index > -1) {
               const postsState = [...posts]
               postsState[index].comments = postComments
               this.seState({ ...this.state, posts: postsState })
               this.render()
          }
     }

     // showAll(id) {
     //      let showItem = document.querySelector(".dic")
     //      showItem.style.display = "block"
     //      document.body.classList.add("stop-scrolling");
     // }

     render() {
          const { posts, isLoadingPosts } = this.state;
          const postsList = document.querySelector("#section_one");
          postsList.innerHTML = isLoadingPosts
               ? `
                <div class="loader">
                <h1>Loading...</h1>
                </div>  `
               : posts.map((post) => {
                    return `
                    <div class="cointner">
                      <div class="father">
                         <div class="div-one"><div>
                         <div class="div-two"></div>
                    </div>
          `;
               }).join("")

          // document.querySelectorAll("#show-all").forEach((list) => {
          //      list.addEventListener("click", (e) => {
          //           this.showAll(list.id)
          //      })
          // })
          // document.querySelectorAll(".sty").forEach((list) => {
          //      list.addEventListener("click", (e) => {
          //           e.stopPropagation()
          //      })
          // })
          // document.querySelectorAll(".dic").forEach((list) => {
          //      list.addEventListener("click", () => {
          //           document.querySelector(".dic").style.display = "none"
          //           document.body.classList.remove("stop-scrolling");
          //      })
          // })

          // postsList.addEventListener('click', (e) => {
          //      const target = e.target.dataset.tagId
          //      if (!isNaN(target)) {
          //           this.getPostComments(target)
          //      }

          // })
     }
     init() {
          this.getPosts();
          this.render();
     }
}
