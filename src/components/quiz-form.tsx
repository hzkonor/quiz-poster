import { Button } from "@/components/ui/button"

export function QuizForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full h-full sm:h-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">        <h1 className="text-3xl font-bold mb-6 text-center">Quiz Time</h1>
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">What is the capital of France?</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                variant="outline"
              >
                Paris
              </Button>
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                variant="outline"
              >
                London
              </Button>
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                variant="outline"
              >
                Berlin
              </Button>
            </div>
          </div>
          <div className="hidden">
            <h2 className="text-lg font-medium mb-2">What is the largest ocean in the world?</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                variant="outline"
              >
                Pacific
              </Button>
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                variant="outline"
              >
                Atlantic
              </Button>
              <Button
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                variant="outline"
              >
                Indian
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="bg-gray-900 hover:bg-gray-900/90 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:focus:ring-offset-gray-800 w-full"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-lg font-medium" id="feedback" />
      </div>
    </div>
  )
}
