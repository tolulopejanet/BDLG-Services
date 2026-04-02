import { specializations } from "./ChooseYourPath";

const CareerApplyForm = ({
  showApplyForm,
  formData,
  onClose,
  onChange,
  onSubmit
}) => {
  if (!showApplyForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-900">✕</button>
        <h3 className="text-2xl font-bold mb-4">Apply for Training</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input 
              name="fullName" 
              value={formData.fullName} 
              onChange={onChange} 
              required 
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={onChange} 
              required 
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <input 
              name="phone" 
              value={formData.phone} 
              onChange={onChange} 
              required 
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Specialization</label>
            <select 
              name="specialization" 
              value={formData.specialization} 
              onChange={onChange} 
              required 
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg"
            >
              <option value="">Select specialization</option>
              {specializations.map((s, idx) => (
                <option key={idx} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Experience / Notes</label>
            <textarea 
              name="experience" 
              value={formData.experience} 
              onChange={onChange} 
              rows="3" 
              className="mt-1 w-full border border-gray-300 p-2 rounded-lg" 
            />
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 border rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerApplyForm;
