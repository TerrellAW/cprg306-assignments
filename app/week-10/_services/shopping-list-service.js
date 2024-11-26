// Database and functions for shopping list
import { db } from '../_utils/firebase.js';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';

export const getItems = async (userId) => {
    try {
        const shoppingItemsCollectionRef = collection(db, 'shopping-list', userId);
        const shoppingItemsSnap = await getDocs(shoppingItemsCollectionRef);

        const shoppingItems = shoppingItemsSnap.docs.map((postDoc) => ({
            userId: postDoc.userId,
            ...postDoc.data()
        }));

        return shoppingItems;
    } catch (error) {
        console.error('Error getting items:', error);
    }
};

export const addItem = async (post) => {
    try {
        const shoppingItemsCollectionRef = collection(db, 'shopping-list', post);
        return shoppingItemsCollectionRef.userId;
    } catch (error) {
        console.error('Error adding item:', error);
    }
};