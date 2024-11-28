// idb.js
export const openDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("ArticlesDatabase", 1);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("articles")) {
          db.createObjectStore("articles", { keyPath: "id" });
        }
      };
  
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
  
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };
  
  export const saveArticle = async (article) => {
    const db = await openDatabase();
    const transaction = db.transaction("articles", "readwrite");
    const store = transaction.objectStore("articles");
    store.add(article);
    return transaction.complete;
  };
  
  export const getAllArticles = async () => {
    const db = await openDatabase();
    const transaction = db.transaction("articles", "readonly");
    const store = transaction.objectStore("articles");
    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
    });
  };
  
  export const deleteArticle = async (id) => {
    const db = await openDatabase();
    const transaction = db.transaction("articles", "readwrite");
    const store = transaction.objectStore("articles");
    store.delete(id);
    return transaction.complete;
  };
  