# Dompdf

Compatibility conversion of Thujohn/Pdf for Laravel Lumen 5.*
Simple Dompdf wrapper package (uses Dompdf stable version 0.5)

## Installation

Add `k98kurz/pdf-lumen` to `composer.json`.
```
"k98kurz/pdf-lumen": "dev-master"
```

Run `composer update` to pull down the latest version of Pdf.

Now open up `bootstrap/app.php` and add the service provider.
```php
	$app->register('k98kurz\Pdf\PdfServiceProvider');
```
Now add the alias.
```php
    class_alias('k98kurz\Pdf\PdfFacade', 'PDF');
```


## Usage

Show a PDF
```php
$app->get('/', function () {
	$html = '<html><body>'
			. '<p>Put your html here, or generate it with your favourite '
			. 'templating system.</p>'
			. '</body></html>';
	return PDF::load($html, 'A4', 'portrait')->show();
});
```

Download a PDF
```php
$app->get('/', function () {
	$html = '<html><body>'
			. '<p>Put your html here, or generate it with your favourite '
			. 'templating system.</p>'
			. '</body></html>';
	return PDF::load($html, 'A4', 'portrait')->download('my_pdf');
});
```

Returns a PDF as a string
```php
$app->get('/', function () {
	$html = '<html><body>'
			. '<p>Put your html here, or generate it with your favourite '
			. 'templating system.</p>'
			. '</body></html>';
	$pdf = PDF::load($html, 'A4', 'portrait')->output();
});
```

Multiple PDFs
```php
for ($i=1;$i<=2;$i++) {
	$pdf = new \k98kurz\Pdf\Pdf();
	$content = $pdf->load(View::make('pdf.image'))->output();
	File::put(public_path('test'.$i.'.pdf'), $content);
}
PDF::clear();
```


## Examples

Save the PDF to a file in a specific folder, and then mail it as attachement.
By @w0rldart

```php
define('BUDGETS_DIR', public_path('uploads/budgets')); // I define this in a constants.php file

if (!is_dir(BUDGETS_DIR)){
	mkdir(BUDGETS_DIR, 0755, true);
}

$outputName = str_random(10); // str_random is a [Laravel helper](http://laravel.com/docs/helpers#strings)
$pdfPath = BUDGETS_DIR.'/'.$outputName.'.pdf';
File::put($pdfPath, PDF::load($view, 'A4', 'portrait')->output());

Mail::send('emails.pdf', $data, function($message) use ($pdfPath){
	$message->from('us@example.com', 'Laravel');
	$message->to('you@example.com');
	$message->attach($pdfPath);
});
```
