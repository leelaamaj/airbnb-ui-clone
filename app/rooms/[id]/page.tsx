'use client';
import { useParams } from 'next/navigation';
import { RoomView } from '@/components/RoomView';
const RoomPage = () => {
  const { id } = useParams<{ id: string }>();
  return <RoomView key={id} id={id} />;
};
export default RoomPage;
