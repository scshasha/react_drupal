<?php

namespace Drupal\react_drupal\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'ReactAppBlock' block.
 *
 * @Block(
 *   id = "react_app_block",
 *   admin_label = @Translation("React App Block"),
 * )
 */
class ReactAppBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [
      '#markup' => '<div id="react_drupal__react_app"></div>',
      '#attached' => [
        'library' => [
          'react_drupal/react_app',
        ],
      ],
    ];

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
  }
}
