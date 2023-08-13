import { useContext, useState, useEffect } from "react";
import { PalaceContext } from "../providers/palaceProvider";
import { BsFillPinFill } from 'react-icons/Bs';
import ImageWithIcons from "./ImageWithIcons";


function RoomView() {
  const { selectedPalace, updateMemoryPalace, changePalaceEntry, savePalaceState, fetchMemoryPalaces, setSelectedPalace, onCloseModal, isEditMode, setIsEditMode, newImageURL, setNewImageURL, selectRoom, selectedRoom, setSelectedRoom} = useContext(PalaceContext);
  const [icons, setIcons] = useState(selectedRoom.roomPins);
  console.log('ICONS', selectRoom.pins)
  const { PalaceName, PalaceCoverImg, Rooms, PalaceDescription } = selectedPalace;

  const { roomImg, name } = selectedRoom;

  const handleRoomClose = () => {
    setSelectedRoom({})
  }
  return (
    <>
      <dialog id="room_view" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onCloseModal}>✕</button>
          <h4 className="text-sm">{PalaceName}</h4>
          <h3 className="font-bold text-lg">{name}</h3>
          <ImageWithIcons imageUrl={roomImg} icons={selectedRoom.roomPins} setIcons={setIcons}></ImageWithIcons>
        </form>
      </dialog>
    </>
  );
}

export default RoomView;