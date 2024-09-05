const Api = () => {
    return {
        user: {
            register: "http://localhost:6000/api/user/register",
            login: "http://localhost:6000/api/user/login"
        },
        posts: {
            getall: "http://localhost:6000/api/posts/getAll",
            add: "http://localhost:6000/api/posts/add",
            delete: id => `http://localhost:6000/api/posts/${id}`,
            update: id => `http://localhost:6000/api/posts/${id}`,
            toggleexpire: id => `http://localhost:6000/api/posts/${id}`
        }
    };
    
};

export default Api;

