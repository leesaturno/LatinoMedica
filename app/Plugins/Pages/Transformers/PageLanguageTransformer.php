<?php
namespace Plugins\Pages\Transformers;

use League\Fractal;
use Plugins\Pages\Model\Page;

/**
 * Class PageTransformer
 * @package Pages\Transformers
 */
class PageLanguageTransformer extends Fractal\TransformerAbstract
{

    /**
     * @param Page $page
     * @return array
     */
    public function transform(Page $page)
    {
        $output = array_only($page->toArray(), ['id', 'title', 'slug']);
        return $output;
    }
}
