// idb.js
export const openDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("InfaqsDatabase", 1);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("infaq")) {
          db.createObjectStore("infaq", { keyPath: "id" });
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
  
  export const saveInfaq = async (infaq) => {
    const db = await openDatabase();
    const transaction = db.transaction("infaq", "readwrite");
    const store = transaction.objectStore("infaq");
    store.add(infaq);
    return transaction.complete;
  };
  
  export const getAllInfaqs = async () => {
    const db = await openDatabase();
    const transaction = db.transaction("infaq", "readonly");
    const store = transaction.objectStore("infaq");
    return new Promise((resolve) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
    });
  };
  
  export const deleteInfaq = async (id) => {
    const db = await openDatabase();
    const transaction = db.transaction("infaq", "readwrite");
    const store = transaction.objectStore("infaq");
    store.delete(id);
    return transaction.complete;
  };
  