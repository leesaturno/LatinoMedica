<?php namespace k98kurz\Pdf;

use Illuminate\Support\Facades\Facade;

class PdfFacade extends Facade {

	/**
	 * Get the registered name of the component.
	 *
	 * @return string
	 */
	protected static function getFacadeAccessor() { return 'pdf'; }

}
