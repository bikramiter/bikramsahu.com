import { AlertTriangle } from "lucide-react";

export default function UnderConstructionBanner() {
  return (
    <div className="flex items-start gap-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-xl shadow-sm mb-6">
      <AlertTriangle className="mt-1 text-yellow-500" />
      <div>
        <p className="font-semibold text-lg">
          🚧 This page is under construction
        </p>
        <p className="text-sm text-yellow-700">
          I’m working on adding more content soon. Thanks for your patience!
        </p>
      </div>
    </div>
  );
}
