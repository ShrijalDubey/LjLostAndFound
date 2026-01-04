import Item from '../model/itemModel.js';
import CollectedItem from '../model/collectedItemModel.js';

export const create = async(req,res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const getAllItems = async(req,res) => {
    try {
        const items = await Item.find(); 
        if(!items|| items.length === 0){
            return res.status(404).json({ message: 'No items found' });
        }   
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const deleteItem = async(req,res) => {
    try {
        const  id  = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const markAsCollected = async(req, res) => {
    try {
        const id = req.params.id;
        

        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }


        const collectedItem = new CollectedItem({
            itemName: item.itemName,
            description: item.description,
            locationLost: item.locationLost,
            collectFrom: item.collectFrom,
            imageUrl: item.imageUrl,
            originalCreatedAt: item.createdAt
        });


        await collectedItem.save();


        await Item.findByIdAndDelete(id);

        res.status(200).json({ 
            message: 'Item marked as collected successfully',
            collectedItem 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}