package component.combolist
{
	import spark.components.ComboBox;
	
	public class GeneriqueCombox extends ComboBox{
		public function GeneriqueCombox()
		{
			super();
			super.labelToItemFunction = myLabelToItemFunction;
		}
		
		private function myLabelToItemFunction(input:String):*{
			// Returns alwais a valid object that matches items in dataProvider
			return this.selectedItem;
		}
		
	}
}