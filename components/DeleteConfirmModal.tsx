export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-lg font-semibold mb-4 text-black'>削除確認</h2>
        <p className='text-black'>本当に削除しますか？</p>
        <div className='flex justify-end mt-4 space-x-2'>
          <button
            onClick={onClose}
            className='bg-gray-300 px-4 py-2 rounded text-black'
          >
            キャンセル
          </button>
          <button
            onClick={onConfirm}
            className='bg-red-500 text-white px-4 py-2 rounded'
          >
            削除
          </button>
        </div>
      </div>
    </div>
  )
}
