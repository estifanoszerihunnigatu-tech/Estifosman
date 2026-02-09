function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full animate-spin flex items-center justify-center">
          <i className="fas fa-code text-white text-2xl"></i>
        </div>
        <h1 className="text-2xl font-bold gradient-text">Loading Portfolio...</h1>
      </div>
    </div>
  )
}

export default Loading
